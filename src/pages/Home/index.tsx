import { ClipboardText } from "phosphor-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { StatusTarefas } from "../../components/StatusTarefas";
import * as S from "./styles";
import { PropsDados } from "../../libs";
import uuid from "react-uuid";

export function Home() {
  const [dados, setDados] = useState<PropsDados[]>([]);
  const { control, getValues, reset } = useForm();

  const temp: PropsDados[] = [
    // {
    //   id: "1",
    //   descricao: "Gabriel Augusto",
    //   status: true,
    // },
    // {
    //   id: "2",
    //   descricao: "Jonayhan Silva",
    //   status: false,
    // },
  ];

  const handleCreate = (value: string) => {
    setDados([...dados, { id: uuid(), descricao: value, status: false }]);
    reset();
  };

  const deleteTask = (value: string) => {
    let temp = dados.filter((item) => item.id != value);
    setDados(temp);
  };

  const concludeTask = (value: string) => {
    const aux = dados.findIndex((item) => {
      return item.id == value;
    });

    const temp = [...dados];

    temp[aux].status = !temp[aux].status;

    setDados(temp);
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
            defaultValue={""}
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

          <Button onClick={() => handleCreate(getValues("tarefa"))}>
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
            {dados.map((item, index) => (
              <Card
                key={index}
                dados={item}
                deleteTask={deleteTask}
                concludeTask={concludeTask}
              />
            ))}
          </S.List>
        )}
      </S.Section>
    </>
  );
}
