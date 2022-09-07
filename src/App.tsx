
import './App.css';
import { useContactsQuery,useContactQuery,useAddContactMutation,useUpdateContactMutation,useDeleteContactMutation} from './services/contactsApi'

function App() {
  const {data,error,isLoading,isFetching,isSuccess} = useContactsQuery();
  return (
    <div className="App">
      <h1>React Redux Query Toolkit</h1>
      {isLoading && <h2>Data is Loading ...</h2>}
      {isFetching && <h2>... Fetching</h2>}
      {error && <h2>Something Went Wrong</h2>}
      {isSuccess && (
        <div>{data?.map( contact=> {
          return <div className="data" key={contact.id}>
            <span>{contact.name}</span>
            <br/> 
            <span><ContactDetail   id={contact.id}/> </span>
          </div>
        })}
        </div>
      )}     
      <div>
        <AddContact />
        </div>   
    </div>
  );
}
 export const ContactDetail = ({id} : {id:string}) => {
   const {data} = useContactQuery(id); 
      return (
        <pre>{JSON.stringify(data)}</pre>
      )
 }
 export const AddContact = () => {
   const [addContact] = useAddContactMutation();
   const contact = {
     "id" : "4",
     "name" : "umar",
     "email" : "umar@gmail.com"
   }
   const addHandler = async() => {
      await addContact(contact);
   }
      return (
     <>
     <button onClick={addHandler}>Add Contact</button>
     </>
   )
   
 }
export default App;
