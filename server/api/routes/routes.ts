import {Application, Request, Response} from "express"

class Routes {

    constructor(app: Application) {

    }

    getRoutes(app: Application): void {
        app.route('/').get((req: Request, res: Response) => res.send("Hello, Wordl!"))
    } 
}

export default Routes