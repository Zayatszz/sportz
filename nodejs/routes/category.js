import express, {Router} from 'express';
// const pool = require('../db.js');
// import db from "../db";
import pkg from  'pg';

const { Pool } = pkg;


const router = express.Router();

const returnSuccess = {"success": true};

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"nodejs",
    password:"za+yaz8844",
    port: 5432,
});
/**
 * @openapi
 * /zaya:
 *  get:
 *      summary: aaaaaaaaaaaaa
 *      description: Finds all categories
 *      responses:
 *          200:
 *              description: Categories in  a json format.
 *          500:
 *              description: Error parsing...
 */

router.get('/zaya', (req, res)=>{
    res.send("Zaayaayaa");
})
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM sport_member');
    // console.log(response.rows);
    // console.log(demoCategories, "llllllllll");
    res.status(200).json(response.rows)
}
// const getUsers = async (req, res) => {
//     const response = await pool.query('SELECT * FROM users');
//     console.log(response.rows);
//     res.send(response.rows)
// }

// const demoCategories = [
//     {"id": 1, "name": "Category1"},
//     {"id": 2, "name": "Category2"},
//     {"id": 3, "name": "Category3"},
//     {"id": 4, "name": "Category4"},
//     {"id": 5, "name": "Category5"},
// ];




router.get('/zaa', getUsers)
/**
 * @openapi
 * /category:
 *  get:
 *      summary: aaaaaaaaaaaaa
 *      description: Finds all categories
 *      responses:
 *          200:
 *              description: Categories in  a json format.
 *          500:
 *              description: Error parsing...
 */

// router.get('/', (req, res)=>{
//     res.send(getUsers);
// })
router.get('/', getUsers)





const createUser = async (req, res) => {
    const { name, number } = req.body.user;
    const response = await pool.query('INSERT INTO sport_member (name, number) VALUES($1, $2)', [name, number]);
    console.log(response);
    res.status(201).json({
      message: 'added successfully',
      body: {
        user: { name, number }
      }
    });
  };
  router.post('/', createUser);


// router.post('/', (req, res)=>{
//     console.log(req.body.category_name);
//     getUsers.push({"name":req.body.name, "number":req.body.number, "age":12, "ht":221, "wt":"", "gp":"", "ppg":"", "rpg":"", "apg":"", "description":"", "thumb":"", "date":""});
//     res.status(201).send(returnSuccess);
// })

// router.post('/', (req, res)=>{
//     console.log(req.body.category_name);
//     demoCategories.push({"id":demoCategories.length+1, "name":req.body.category_name});
//     res.status(201).send(returnSuccess);
// })


const getUserById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM sport_member WHERE id = $1', [id]);
    res.status(200).json(response.rows);
}
router.get('/:id', getUserById);

const deleteMember = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM sport_member WHERE id = $1', [id]);
    console.log(response);
    res.json(`${id} deleted successfully` );
}
router.delete('/:id', deleteMember);
const updateSport_member = async(req, res) =>{
    const id = req.params.id;
    const {name, number, age, ht, wt, gp, ppg, rpg, apg, description, thumb, date} = req.body;
    const response = await pool.query('UPDATE sport_member SET name=$1, number=$2, age=$3, ht=$4, wt=$5, gp=$6, ppg=$7, rpg=$8, apg=$9, description=$10, thumb=$11, date=$12 WHERE id=$13'[
        name, number, age, ht, wt, gp, ppg, rpg, apg, description, thumb, date, id
    ]);
    console.log(response);
    res.json("Member updated successfully");
}
router.put('/:id', updateSport_member);
// /**
//  * @openapi
//  * /category/{id}:
//  *   get:
//  *     summary: Fetches category by id
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         description: category id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: Category in JSON format
//  *       500:
//  *         description: Error parsing...
//  */
// // router.get('/:id', (req, res)=>{
// //     res.status(200).send(returnSuccess);
// // })

export default router;