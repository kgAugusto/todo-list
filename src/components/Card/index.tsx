import * as S from "./styles";
import { Check, Trash } from "phosphor-react";
import { PropsDados } from "../../libs";

type Props = {
  dados: PropsDados;
  deleteTask: (value: string) => void;
  concludeTask: (value: string) => void;
};

export function Card({ dados, deleteTask, concludeTask }: Props) {
  return (
    <>
      <S.Container status={dados.status}>
        <div>
          {dados.status ? (
            <button onClick={() => concludeTask(dados.id)}>
              <Check color="white" />
            </button>
          ) : (
            <button onClick={() => concludeTask(dados.id)} />
          )}
        </div>

        <div>
          <p>{dados.descricao}</p>
        </div>

        <div onClick={() => deleteTask(dados.id)}>
          <Trash size={24} />
        </div>
      </S.Container>
    </>
  );
}
