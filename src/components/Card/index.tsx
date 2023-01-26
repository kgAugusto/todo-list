import * as S from "./styles";
import { Check, Trash } from "phosphor-react";
import { PropsDados } from "../../libs";

type Props = {
  dados: PropsDados;
};
export function Card({ dados }: Props) {
  return (
    <>
      <S.Container>
        <div>
          {dados.status ? (
            <S.ButtonCheck status={dados.status}>
              <Check color="" />
            </S.ButtonCheck>
          ) : (
            <S.ButtonCheck status={dados.status} />
          )}
        </div>

        <div>
          <p>{dados.descricao}</p>
        </div>

        <div onClick={() => console.log("")}>
          <Trash size={24} />
        </div>
      </S.Container>
    </>
  );
}
