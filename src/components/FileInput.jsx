import { styled } from 'styled-components';
import Typo from './Typo/Typo';
import AttachImage from './AttachImage/AttachImage';

// const Label = styled.label.attrs({ htmlFor: 'file' })``;
const Title = styled(Typo)`
  ${({ theme }) => theme.font.contentText};
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

// 왜 id가 없으면 안되는지 모르겠음. id가 없어지면 input이 인식이 안된다.
const Input = styled.input.attrs({ type: 'file', id: 'file', accept: 'image/*' })`
  display: none;
`;

const FileInput = ({ postImage }) => {
  const handleFilePost = () => {
    // console.log('file');
  };

  const uploadImageHandler = () => {
    // console.log('title');
  };

  const uploadImageButtonClick = () => {
    // console.log('input');
  };

  // 클릭하면 input, 사진 바뀌면 title

  return (
    <div>
      <label htmlFor='file'>
        <AttachImage onChange={uploadImageButtonClick}>사진 업로드</AttachImage>
      </label>
      <Input onChange={postImage} />
    </div>
  );
};

export default FileInput;
