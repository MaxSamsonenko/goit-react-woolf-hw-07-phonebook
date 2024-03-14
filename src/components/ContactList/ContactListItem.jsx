import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  Li,
  NameWrap,
  NumberWrap,
  BtnWrap,
  DeleteBtn,
} from './ContactList.styled';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDeleteBtn = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Li>
      <NameWrap>
        <p>{name}</p>
      </NameWrap>
      <NumberWrap>
        <p>{phone}</p>
      </NumberWrap>
      <BtnWrap>
        <DeleteBtn type="button" onClick={handleDeleteBtn}>
          Delete
        </DeleteBtn>
      </BtnWrap>
    </Li>
  );
};
