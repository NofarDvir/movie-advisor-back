import { Response } from "express";
import { AuthRequest } from "../common/auth_middleware";
import axios from "axios";

class MovieController {
  async search(req: AuthRequest, res: Response) {
    const searchTerm = req.params.search;

    try {
      console.log(`${process.env.MOVIE_API_URL}/search/movie?query=${searchTerm}`)
      const response = await axios.get(
        `${process.env.MOVIE_API_URL}/search/movie?query=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${process.env.MOVIE_API_APP_KEY}` },
        }
      );
      const data = await response.data;

      res.status(200).send(data.results);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getById(req: AuthRequest, res: Response) {
    const movieId = req.params.movieId;

    try {
      const response = await axios.get(
        `${process.env.MOVIE_API_URL}/movie/${movieId}`,
        {
          headers: { Authorization: `Bearer ${process.env.MOVIE_API_APP_KEY}` },
        }
      );
      const data = await response.data;
      
      res.status(200).send(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new MovieController();
