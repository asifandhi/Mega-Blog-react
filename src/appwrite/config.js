import React from "react";
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return (
        await this,
        this.databases.updateDocument(
          conf.appwriteDatabaseId,
          conf,
          appwriteCollectionId,
          slug,
          {
            title,
            content,
            featuredImage,
            status,
          },
        )
      );
    } catch (error) {
      console.log("error :: updatepost ::", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );

      return true;
    } catch (error) {
      console.log("error :: deletepost :: ", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("error :: getpost :: ", error);
      return null;
    }
  }

  async getPOsts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("error :: getposts :: ", error);
    }
  }

  //   file upload services
  async uploadFile(file) {
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
        
    } catch (error) {
            console.log("error :: uploadFile :: ", error);
            return false;
        
    }
  }

  async deleteFile(fileId) {
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true;
        
    } catch (error) {
            console.log("error :: deleteFile :: ", error);
            return false;
        
    }
  }

  getFilePreview(fileId) {
    try {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
        
    } catch (error) {
            console.log("error :: getFilePreview :: ", error);
            return false;
        
    }
  }
}

const service = new Service();

export default service;
