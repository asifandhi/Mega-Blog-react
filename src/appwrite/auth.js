import conf from "../conf/conf";

import { Client ,Account , ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);

    }

    async createAccount(email,password,name){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                this.login(email,password);
                 
            }else{
                    console.log("Error :: Create account :: ",error);
                    
            }
            
        } catch (error) {

         throw error;   
        }
    }

    async login(email,password){
        try {
            return await this.account.createEmailPasswordSession(email,password);

            
        } catch (error) {
           console.log("Error :: Login :: ",error);
           
            
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
            
        } catch (error) {
                if(error.code === 401){
                    console.log("No user logged in");
                }   
                else{
                    console.log("Error :: GetCurrentUser :: ");
                }
       
         
           
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            console.log("Error :: Logout ");
            
            
        }
    }
}

const authService = new AuthService();

export default authService;