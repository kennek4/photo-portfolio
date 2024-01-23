import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from "axios"

export default function BlogUpload() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/api/upload",
            {
                place: e.target.place.value,
                coordinates: e.target.coords.value,
                date: e.target.date.value,
                content: e.target.content.value
            }
        );
    }

    return (
        <div>
            <h1>Blog Upload!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="place">
                    <Form.Label>Place Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Place Name Here" />
                </Form.Group>
                <Form.Group controlId="coords">
                    <Form.Label>Coordinates</Form.Label>
                    <Form.Control type="text" placeholder="Location Coordinates" />
                </Form.Group>
                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" placeholder="Date Taken" />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label>Blog Content</Form.Label>
                    <Form.Control as={"textarea"} rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
