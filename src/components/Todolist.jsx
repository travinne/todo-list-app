
import React from "react"


const Todolist = ({headers,data, tick}) => {

  return(
    <table className="table">
      <thead>
      
        <tr>
          {headers.map((header,headIndex) =>
           (<th key={headIndex}>{header}
           </th>)
        )
        }
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) =>(
          <tr key={index} className={data.completed? "completed" : ''}>
            <td>
            <input
                type="checkbox"
                checked={data.completed}
                onChange={() => tick(index)}
              />
            </td>
            {headers.map((header, dataIndex) => (
            <td key={dataIndex}>
              {data[header]}
            </td>
            ))
          }
          </tr>
        ))}
      </tbody>  
    </table>
  )
}

export default Todolist