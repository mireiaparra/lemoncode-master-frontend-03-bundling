import React from "react";
import classes from "./mainComponentStyles.scss";

export const MainComponent = () => {
  const [text, setText] = React.useState('Hola');

  function getText(value: string): string{
   return setText(`Hola ${value}`);
  }

  React.useEffect(() => {
    getText('Mundo');
  }, []);

  return (
    <div className="container">
      <div className={classes.title}>
         {text}
      </div>
    </div>
  );
};
