import React  from "react";
import "./Table.css";

interface OriginData {
  name?: string;
  sex?: SexData;
  age?:  number;
}

enum SexData {
  male = "男",
  female = "女",
}

function OriginTable() {
  const data: Array<OriginData> = [
    {
      name: "AAA",
      sex: SexData.female,
      age: 12,
    },
    {
      name: "BB",
      sex: SexData.female,
      age: 23,
    }
  ];
  const cells = data.map((child: OriginData,index:number)=>
    <tr key={child.name}>
      <td>{child.name}</td>
      <td>{child.sex}</td>
      <td>{child.age?.toString()}</td>
    </tr>
    )
  return (
    <table>
      {/* 特性-标题 头部和底部*/}
      <caption>底部标题</caption>
      <thead>
        <tr>
          <th scope="col">名称</th>
          <th scope="col">性别</th>
          <th scope="col">年龄</th>
        </tr>
      </thead>
      <tbody>
        {cells}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan={2}>
            Average age
          </th>
          <td>33</td>
        </tr>
      </tfoot>
    </table>
  );
}

export { OriginTable };
