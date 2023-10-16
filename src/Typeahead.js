import { Box, Container, Grid, LinearProgress } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import useFetch from "./hooks/useFetch";

function Typeahead() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemCards, setSelectedItemCards] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?search=${searchTerm}&_limit=10`
  );

  useEffect(() => {
    if (searchTerm.trim() === "") {
      return;
    }

    if (data) {
      setSuggestions(data);
    }
  }, [searchTerm, data]);

  const handleInputChange = (e, newValue) => {
    setSearchTerm(newValue);
  };

  const handleSelect = (event, newValue) => {
    setSelectedItems(newValue);
  };

  const createCards = () => {
    const cards = selectedItems.map((item) => (
      <ItemCard key={item.id} item={item} />
    ));
    setSelectedItemCards(cards);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: "20px" }}>
        <Autocomplete
          multiple
          id="search"
          options={suggestions.filter(
            (option) =>
              !selectedItems.some(
                (selectedItem) => selectedItem.id === option.id
              )
          )}
          getOptionLabel={(option) => option.title}
          value={selectedItems}
          onChange={handleSelect}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <TextField {...params} label="Search" variant="outlined" />
          )}
        />
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={createCards}
            sx={{ width: "200px" }}
          >
            Submit
          </Button>
        </Box>
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : error ? (
          <Box>Error: {error.message}</Box>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                {selectedItemCards}
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default Typeahead;
