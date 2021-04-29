import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
	const [info, setInfo] = useState({});
	const [file, setFile] = useState(null);
	const handleBlur = e => {
		const newInfo = { ...info };
		newInfo[e.target.name] = e.target.value;
		setInfo(newInfo);
	}
	const handleFileChang = e => {
		const newFile = e.target.files[0];
		setFile(newFile);
	}

	const handleSubmit = () => {
		const formData = new FormData()
		formData.append('file', file);
		formData.append('name', info.name);
		formData.append('email', info.email);

		fetch('http://localhost:7000/addADoctor', {
			method: 'POST',
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
			.catch(error => {
				console.error(error)
			})
	}
	console.log(info);
	console.log(file);
	return (
		<div className='container-fluid row '>
			<Sidebar></Sidebar>
			<div className="col-md-10 p-4 pr-5 style">
				<h5 className='text-brand'>Add Doctor</h5>

				<form onSubmit={handleSubmit}>
					<div class="mb-3">
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">Name</label>
							<input onBlur={handleBlur} type="text" class="form-control" name='name' />
						</div>
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input onBlur={handleBlur } type="email" class="form-control" name='email' />
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Upload A Picture</label>
						<input onChange={handleFileChang} type="file" class="form-control" id="exampleInputPassword1" />
					</div>

					<button type="submit" class="btn btn-primary">Submit</button>
				</form>

			</div>
		</div>
	);
};

export default AddDoctor;