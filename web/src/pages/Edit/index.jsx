import React from 'react';

import { Form } from '@unform/web';

import Fields from './Fields';

import { 
	Container,
	BoxEdit, 
	BoxForm 
} from './styles';

const Edit = () => {
	return (
		<Container>
			<BoxEdit>
				<BoxForm>
					<h2>About Me</h2>
					<Form>
						<Fields.Input name='name' label='Name'/>
						<Fields.Input name='office' label='Office'/>
						<Fields.Textarea name='bio' label='Bio'/>
					</Form>
				</BoxForm>
				
				<BoxForm>
					<h2>Skills</h2>
					<Form>
						<Fields.Textarea name='skills' label='Skills'/>
					</Form>
				</BoxForm>
			</BoxEdit>
		</Container>
	);
};

export default Edit;