/*import express from "express";
import HTTP from 'http'
import path from "path";
import cors from 'cors';
import {Server as socketServer } from "socket.io";
import multer from "multer";
*/
const express = require('express')
const HTTP = require('http')
const path = require('path')
const cors = require('cors')
const socketServer = require('socket.io')

const app = express()
const server = HTTP.createServer(app)
/* El evento io es el que sirve como socket para comunicarlo */
const io = require("socket.io")(server, {
    cors:{
        methods: ["GET", "POST"],
        origin:"*",
        credentials: true
    }
})

module.exports = objets = {
    "io": io,
    "server": server,
    "path":path,
    "express": express,
    "app": app,
    'cors':cors
}  
