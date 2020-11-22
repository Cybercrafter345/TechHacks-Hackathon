function App() {
  var apiGet = 'https://console.echoAR.xyz/query?key=damp-lab-2689&entry=a8dbcf6b-04af-4247-8b80-80368e4796d7';
  var objsrc = "obj: url("+apiGet+");";
  return (
    <iframe src="https://console.echoAR.xyz/webxr?key=damp-lab-2689&entry=dea8c460-b7fe-4f8a-93ce-3bebad4c9c39"/>
  );
}

export default App;
