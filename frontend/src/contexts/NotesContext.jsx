import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { db } from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./Notes.css";
import { useAuth } from "../contexts/AuthContext";
import { Box } from "@material-ui/core";

const NotesContext = ({ arr }) => {
  var listStyle = {
    margin: 5,
    display: "flex",
    flex: 1,
    background: "#C5C1C0"
  };

  const { currentUser } = useAuth();
  return (
    <List className="todo__list">
      <ListItem style={listStyle}>
        <ListItemAvatar />
        <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
      </ListItem>
      <DeleteForeverIcon
        onClick={() => {
          db.collection(currentUser.email)
            .doc(arr.id)
            .delete();
        }}
      />
    </List>
  );
};
export default NotesContext;
