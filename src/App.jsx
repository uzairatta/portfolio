

function App(){
  return (
    <div>
      <h1>My First React Project</h1>
      <table border={1} style={{width:
        '200px', margin: '0 auto', textAlign: 'left'
      }}>
        <thead>
          <th>Sr</th>
          <th>Name</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Uzair</td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>Bread</li>
        <li>Tea</li>
      </ul>

      <p>
        Hi my name is Uzair and I am a student. I am studying at nexskill. 
      </p>


       <img src="/w.png" width={100} height={100} />


      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
  <input type="text" placeholder="Enter name" style={{ width: '200px' }} />
  <input type="email" placeholder="Enter email" style={{ width: '200px' }} />
  <button type="submit" style={{ width: '100px' }}>Submit</button>
</div>


      <iframe src="https://www.wikipedia.org"
      width="600"
      height="400"
      title="Wikipedia">
        </iframe>


       <iframe 
       width="560"
        height="315" 
        src="https://www.youtube.com/embed/GV-amY8PMu0?si=zBOYX4-FRRz-hWEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        


      
      
    </div>
  )
}

export default App; 