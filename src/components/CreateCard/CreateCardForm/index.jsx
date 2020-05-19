import React from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";
// Components
import AddCardButton from "components/CreateCard/AddCardButton";

const CreateCardForm = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	console.log(watch("title"));

	const HTML_PAT = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label>Título</label>
			<input
				name="title"
				defaultValue="Ingresa un título"
				ref={register({ required: true, maxLength: 30 })}
			/>
			{errors.title && <p>This field is required</p>}
			<label>Descripción</label>
			<input
				name="description"
				defaultValue="Explicá en que consiste el artículo"
				ref={register({ required: true, maxLength: 200 })}
			/>
			{errors.description && <p>This field is required</p>}

			<label>URL</label>
			<input
				name="url"
				defaultValue="Explicá en que consiste el artículo"
				ref={register({ required: true, maxLength: 100, pattern: HTML_PAT })}
			/>

			{errors.url && errors.url.type === "required" ? <p>This field is required</p> : ""}
			{errors.url && errors.url.type === "pattern" ? <p>This must be a URL</p> : ""}

			<AddCardButton />
		</form>
	);
};

export default CreateCardForm;
