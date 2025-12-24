import passport from "passport";
import passportJWT from "passport-jwt";
import GitHubStrategy from "passport-github2";
import local from "passport-local"

import { UserRepository } from "../services/index.js";
import {createHash, isValidPassword, generateToken, cookieExtractor} from "../helpers/auths.js"
import config from "./config.js";

import {DateTime} from "luxon";

const {KEY, ADMINUSER, ADMINPASS} = config;

const LocalStrategy= local.Strategy;
const JWTStrategy= passportJWT.Strategy;

//------------------------------------------------------------------------

const initializePassport= () => {
    passport.use('current', new JWTStrategy({
        secretOrKey:KEY,
        jwtFromRequest:passportJWT.ExtractJwt.fromExtractors([cookieExtractor])
    }, (jwt_payload, done) => {
        return done(null, jwt_payload);
    }));


    //------------------------------------------------------------------------

    passport.use('login', new LocalStrategy(
        {usernameField:'email'},
        async (username, password, done) => {

            try {
                
                const user= await UserRepository.getUserByEmail(username);
                if(!user){
                    return done(null, false)
                }

                if(!isValidPassword(user.data[0],password)){
                    return done(null, false);
                }
        
                const token= generateToken(user.data[0]);

                user.data[0].token=token;

                user.data[0].lastConnection= DateTime.now().toLocaleString();

                console.log(user.data[0]);

                await UserRepository.updateUser(user.data[0]._id, user);

                return done(null,user.data[0]);

            } catch (error) {
                return done('Error login'+error);
            }
        }
    ));

    //------------------------------------------------------------------------
    passport.serializeUser((user, done)=>{
        done(null, user._id);
    });

    //------------------------------------------------------------------------
    passport.deserializeUser(async (id,done) => {
        const user= await UserRepository.getUser(id);
        done(null, user);
    });
}

export default initializePassport;