import { React } from "react";
//import {Link} from "react-router-dom";
//import {ListGroup, ListGroupItem} from "reactstrap";
import ModalForm from "./ModalForm";
const Homepage= () => {
    const books=[
            {
                title:" Mudra Rakshasa" ,
                author: " Visakdatta",
                subject: " narrates the ascent of the king Chandragupta Maurya to power ",
            },
            {
                title:"history of Kashmir",
                author: "kalhana",
                subject:" it is stated that the valley of Kashmir was formerly a lake.",
            },
            {
                title:"The Ocean of Story",
                author: "Somdeva",
                subject: "Animals and the Ungrateful Woman, Story of the Grateful",
            },
            {
                title:"Soldier's Pay",
                author: "William Faulkner",
                subject:" Soldiers' Pay is war and the irreparable damage it causes.",
            },
            {
                title:"The Silver Cord",
                author: "Sidney Howard",
                subject:"This scathing drama of mother- love gone awry",
            },
            {
                title:"ESTHER WATERS BY GEORGE MOORE",
                author: "WILLIAM HEINEMANN",
                subject:"A PLAY IN FIVE ACT",
            },
            {
                title:"This Storm",
                author: "James Ellroy",
                subject:" the murder of two LAPD officers",
            },
            {
                title: "The Neaon Bible",
                author: "John Kennedy Toole",
                subject:"The novel is a bildungsroman about a callow youth",
            },
            {
                title: "The Porpoise",
                author:  "Mark Haddon",
                subject: "In comes a young man named Darius who discerns the secret, and the father drives him away while mortally threatening his life.",
            },
            {
                title:"Sidewall",
                author: "David Graham",
                subject:"sidewall arrangement and lower closure",
            },
            {
                title:"The Pearl",
                author: "John Steinbeck",
                subject:"theme of the destructive power of greed is explored as the characters navigate their personal desires, destiny, and racism. ",
            },
    ];
    return(
        <>
        <div className="book-list">

            <div className="py-4">
                <h1>Home page</h1>
                <ModalForm/>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Subject</th>
                        </tr>
                    </thead>
            <tbody>
            {books &&
            books.map((books, index) =>(
                <>
                <div className="book" key={index}>
                    <ul>
                        <li><h2>{books.title}</h2></li>
                    </ul>
                    <p>{books.author}</p>
                    <p>{books.subject}</p>
                </div>

                </>
            ))}
            </tbody>
         </table>
         <button>addItem</button>
        </div>
        </div>
        </>
    )
}


 export default Homepage;