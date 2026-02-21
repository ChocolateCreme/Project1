import { useNavigate } from "react-router-dom";
import { useReducer, useRef, useEffect } from "react";
import formReducer from "../reducers/formReducer";
import { useLayoutEffect } from "react";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ")

const initialState = {
    values: {
        name: "",
        title: "",
        email: "",
        bio: "",
        image: null,
    },
    error: "",
    isSubmitting: false,
    success: "",
}

const AddProfileForm =({onAddProfile}) => {

    const [state, dispatch] = useReducer(formReducer, initialState);

    const {values, error, isSubmitting, success} = state;

    //const [values, setValues] = useState({name: "", title: "", email: "", bio: "", image: null});
    //const [error, setError] = useState("");
    //const [isSubmitting, setIsSubmitting] = useState(false);
    //const [success, setSuccess] = useState(false);

    const {name, title, email, bio, image} = values;
    const navigate = useNavigate();

    const fieldRef = useRef (null)

    console.log (fieldRef)

    useEffect (() => {
        fieldRef.current.focus();
    }, []);

    useLayoutEffect (() => {
        const prev = document.body.style.width;
        document.body.style.width = "500px"
        return () => {document.body.style.width = prev;};
    }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === "image"){
            const file = event.target.files[0];
            dispatch({type: "SET_IMG", payload: file})
            //if(file && file.size <1024 * 1024){
                //setValues(pre => ({...pre, image:file}));
                //setErrors("");
            //} else{
                //setError("The image should be less than 1MB.");
                //setValues(pre => ({...pre, image:null}));
            //}
            } else {
                dispatch({type: "SET_VALUES", payload: {name, value}})
                setValues(pre => ({...pre, [name]: value}));
            }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: "START_SUBMITTING"})
        //setIsSubmitting(true);
        try {
            if (!stripTags(trimCollapse(name)) || !stripTags(trimCollapse(title)) || !trimCollapse(bio) || !stripTags(trimCollapse(email))
            ) {
            dispatch({type:"EMPTY_FIELD"})
            //setError("Please fill in name, title, email, and description");
            return;
        }
        console.log(`image ${image}`);
        const cleanedData = {
            id: Date.now(),
            name: stripTags(trimCollapse(name)),
            title: stripTags(trimCollapse(title)),
            email: stripTags(trimCollapse(email)),
            bio: trimCollapse(bio),
            image: URL.createObjectURL(image),
        };

        onAddProfile(cleanedData);
        dispatch ({type:"ON_SUBMIT"})

        //setValues({ name: "", title: "", email: "", bio: "", image: null });
        //setError("");
        //setSuccess("Form is submitted susccesfully");
        setTimeout(() => {
            //setSuccess("");
            dispatch({type:"SUBMIT_SUCCESS"})
            navigate("/")
        }, 1000);
        } catch (error) {
            dispatch({type:"SYSTEM_ERROR", payload: error.message})
            setError(error.message);
        } finally {
            //setIsSubmitting(false);
            dispatch({type:"AFTER_SUBMIT"})
        }
    };

    const disabled = 
        !stripTags(trimCollapse(name)) ||
        !stripTags(trimCollapse(title))|| 
        !stripTags(trimCollapse(bio)) ||
        !stripTags(trimCollapse(email)) ||
        isSubmitting ||
        error !=="";

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" required value={name} onChange={handleChange}/>
            <label htmlFor="title">Title: </label>
            <input id="title" name="title" required value={title} onChange={handleChange}/>
            <label htmlFor="email">Email: </label>
            <input id="email" name="email" type="email" required value={email} onChange={handleChange}/>
            <label htmlFor="bio">Add Description: </label>
            <textarea id="bio" name="bio" required value={bio} maxLength={200} onChange={handleChange}/>
            <label htmlFor="image">Upload an image:  </label>
            <input id="image" name="image" type="file" accept="image/*" onChange={handleChange}/>

            <button id="submit">Submit!</button>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
        </form>
    );
};

export default AddProfileForm;