import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

function Item({item, onDelete}) {
  return (
    <>
      <Grid item xs={7}>
        <Paper>{item.product}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>{item.quantity}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>{item.price}</Paper>
      </Grid>
      <Grid item xs={1}>
        <DeleteIcon onClick={() => onDelete(item.id)}/>
      </Grid>
    </>
  );
}

export default Item;