import React, { FC, ReactElement } from "react";

interface StringifyObjectProps {
  object: object;
  renderItem(key: string | number, value: string | number): ReactElement;
}

const StringifyObject: FC<StringifyObjectProps> = ({ object, renderItem = (key, value) => {} }) => {
  return <>{Object.entries(object).map((item) => renderItem(item[0], item[1]))}</>;
};

export default StringifyObject;
