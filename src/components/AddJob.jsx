import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const AddJob = () => {
	const [formData, setFormData] = useState({});
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			// department: 'Sales',
		},
	});

	// useEffect(() => {
	// 	const firstName = watch('firstName');
	// 	if (firstName === '/nk') {
	// 		setValue('firstName', 'Nick');
	// 		setValue('lastName', 'Kronkatch');
	// 	}
	// }, [watch('firstName')]);

	return (
		<div className="page_addJob">
			<h3>Add Job:</h3>
			<div className="App">
				<form
					onSubmit={handleSubmit((data) => {
						setFormData(data);
					})}
				>
					<div className="row">
						<input
							type="text"
							{...register('position', {
								required: 'Please enter a position.',
								minLength: {
									value: 4,
									message:
										'You need to have at least 4 characters in position name.',
								},
							})}
							placeholder="Position"
						/>
						<div className="info">{errors.position?.message}</div>
					</div>
					<div className="row">
						<input
						className="field_url"
							type="text"
							{...register('url', {
								required: 'Please enter a URL.',
							})}
							placeholder="URL"
						/>
						<div className="info">{errors.url?.message}</div>
					</div>
					<div className="row">
						<input
						className="field_skills"
							type="text"
							{...register('skills', {
								required: 'Please enter skills in comma separated form.',
								minLength: {
									value: 4,
									message:
										'You need to have at least 4 characters in this field.',
								},
							})}
							placeholder="Skills"
						/>
						<div className="info">{errors.skills?.message}</div>
					</div>
					<button disabled={Object.keys(errors).length}>Send</button>

					{Object.keys(formData).length > 0 && (
						<div className="formData">
							<pre>{JSON.stringify(formData, null, 2)}</pre>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};
