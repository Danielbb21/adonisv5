import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User';


export default class UsersController {

  public async create({ request, response }: HttpContextContract) {
    const { name, username, password } = request.only(['name', 'username', 'password']);

    const user = new User()
    user.name = name;
    user.username = username;
    user.password = password;
    await user.save();
    return response.status(201).json(user);
    // console.log(data);
  }

  public async index(){
    const allUsers = await User.all();
    return allUsers;
  }
}
