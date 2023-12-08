export default function Table({ data }) {

  return (
    <div className="table-container">
      {Object.keys(data).length === 0 ? (
        ''
      ) : (
        <table className="data-table">

            <tr>
              <td>city</td>
              <td>{data.name}</td>
            </tr>

            <tr>
              <td>temp</td>
              <td>{(data.main.temp-272.1).toFixed(2)}°C</td>
            </tr>

             <tr>
              <td>descr</td>
              <td>{data.weather[0].description}</td>
            </tr>
            
            <tr>
              <td>country</td>
              <td>{data.sys.country}</td>
            </tr>

            <tr>
              <td>sunrise</td>
              <td>{data.sys.sunrise}</td>
            </tr>
            <tr>
              <td>timezone</td>
              <td>{data.timezone}</td>
            </tr>

      
        </table>
      )}
    </div>
  );
}
