import passwordGenerator from 'password-generator';

import Queue from '../lib/Queue';

export default {
    async store(req, res) {
        console.log(req.body);
        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        await Queue.add('RegistrationMail', { user });

        return res.json(user);
    }
}