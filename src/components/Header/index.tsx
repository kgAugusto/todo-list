import * as S from "./styles";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <S.Container>
      <div>
        <img src={Logo} />
      </div>
    </S.Container>
  );
}
