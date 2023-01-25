import * as S from "./styles";

export function StatusTarefas() {
  return (
    <>
      <S.Container>
        <S.Info color="blue">
          <p>Tarefas criadas</p>
          <span>0</span>
        </S.Info>
        <S.Info color="purple">
          <p>Concluídas</p>
          <span>0</span>
        </S.Info>
      </S.Container>
    </>
  );
}
