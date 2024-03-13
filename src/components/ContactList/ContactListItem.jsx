import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import {
  Li,
  NameWrap,
  NumberWrap,
  BtnWrap,
  DeleteBtn,
} from './ContactList.styled';

export const ContactListItem = ({ name, number, id }) => {
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
        <p>{number}</p>
      </NumberWrap>
      <BtnWrap>
        <DeleteBtn type="button" onClick={handleDeleteBtn}>
          Delete
        </DeleteBtn>
      </BtnWrap>
    </Li>
  );
};
