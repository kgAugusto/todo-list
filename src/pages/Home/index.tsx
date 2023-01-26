import { ClipboardText } from "phosphor-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { StatusTarefas } from "../../components/StatusTarefas";
import * as S from "./styles";
import { PropsDados } from "../../libs";

export function Home() {
  const [dados, setDados] = useState<PropsDados[]>([]);
  const { control, getValues } = useForm();

  const temp: PropsDados[] = [
    {
      descricao: "Gabriel Augusto",
      status: true,
    },
    {
      descricao: "Jonayhan Silva",
      status: false,
    },
  ];

  const handleCriar = (value: string) => {
    setDados([...dados, { descricao: value, status: true }]);
  };
  useEffect(() => {
    setDados(temp);
  }, []);
  return (
    <>
      <Header />
      <S.Section>
        <div className="input">
          <Controller
            name="tarefa"
            control={control}
            render={({ field: { value = "", onChange } }) => {
              return (
                <input
                  type="text"
                  placeholder="Adicione uma nova tarefa"
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />

          <Button onClick={() => handleCriar(getValues("tarefa"))}>
            Criar
          </Button>
        </div>
        <StatusTarefas />

        {dados.length <= 0 ? (
          <>
            <S.InfoNone>
              <ClipboardText size={48} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </S.InfoNone>
          </>
        ) : (
          <S.List>
            {dados.map((item) => (
              <Card dados={item} />
            ))}
          </S.List>
          // <>
          //   {dados.map((item) => (
          //     <li>{item.descricao}</li>
          //   ))}
          // </>
        )}
      </S.Section>
    </>
  );
}
