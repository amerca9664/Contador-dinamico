import { StyledSpan } from './textLbl.styles';

const TextLbl = ({ color, children }) => {
	return <StyledSpan $color={color}>{children}</StyledSpan>;
};

export default TextLbl;
