import { useEffect, useState } from "react";
import { getUsers } from "../../services/getUsers";

import { Header} from "../header/Header";
import { Content } from "../content/Content";
import { Grid } from "@mui/material";
import { StyledDiv } from "./styles";

interface IUserName {
  firstname: string,
  lastname: string,
}

interface IUser {
  email: string,
  id: number,
  name: IUserName,
  password: string,
  phone: string,
  username: string,
};

export const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Array<IUser>>([]);
  
  useEffect(() => {
    getUsers()
      .then((response: any) => setUsers(response.data))
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <>
      <Header />
      
      {loading
        ? <span>loading!</span>
        : <StyledDiv>
          <Grid container rowSpacing={8} columnSpacing={4}>
            {users?.map(poke => <Content key={poke.id} name={poke.name} />)}
          </Grid>
          
        </StyledDiv>
      }
    </>
  )
};