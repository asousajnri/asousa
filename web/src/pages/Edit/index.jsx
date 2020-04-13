import React from 'react';

import { Form } from '@unform/web';

import Fields from './Fields';

import {
  Container,
  BoxEdit,
  BoxForm,
  SkillsList,
  Add,
  WorkList,
} from './styles';

const Edit = () => {
  return (
    <Container>
      <BoxEdit>
        <BoxForm>
          <h2>About Me</h2>

          <Form>
            <Fields.Input name="name" label="Name" />
            <Fields.Input name="office" label="Office" />
            <Fields.Textarea name="bio" label="Bio" />
          </Form>
        </BoxForm>
      </BoxEdit>

      <BoxEdit>
        <h2>Skills</h2>

        <SkillsList>
          <li>
            <span>React JS</span>
            <button>Excluir</button>
          </li>
          <li>
            <span>React Native</span>
            <button>Excluir</button>
          </li>
          <li>
            <span>Node</span>
            <button>Excluir</button>
          </li>
        </SkillsList>

        <Add>
          <button>Adicionar Skill</button>
        </Add>
      </BoxEdit>

      <BoxEdit>
        <h2>Works</h2>

        <WorkList>
          <h3>Case</h3>

          <Form>
            <Fields.InputColumn name="title" label="Title" />
            <Fields.InputColumn name="subtitle" label="Subtitle" />
            <Fields.InputColumn name="link" label="Link" />
            <Fields.InputColumn name="imagem" label="Imagem" />
          </Form>
        </WorkList>
      </BoxEdit>
    </Container>
  );
};

export default Edit;
