import joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import { IProgramBlock } from "../models/model.ProgramBlock";
import { ISchedule } from "../models/model.Schedule";
import { IRoom } from "../models/model.Room";
import { ITeacher } from "../models/model.Teacher";
import { ICourses } from "../models/model.Courses";
import { IUser } from "../models/model.User";

export const ValidateSchema = (Schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await Schema.validateAsync(req.body);
        next();
      } catch (error) {
        res.status(422).json({ error });
      }
    };
  };

  export const Schemas = {
    ProgramBlock: {
        create: joi.object<IProgramBlock>({
            program: joi.string().regex(/^[A-Z]{10}$/).trim().required(),
            block: joi.string().regex(/^[1-4a-zA-Z]{2}$/).trim().required(),
            courses: {
            courseDetails: {
                code: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
                description: joi.string().regex(/^[1-4a-zA-Z]{55}$/).required(),
                unit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
            }}
        }),
        update: joi.object<IProgramBlock>({
          program: joi.string().regex(/^[A-Z]{10}$/).trim().required(),
          block: joi.string().regex(/^[1-4a-zA-Z]{2}$/).trim().required(),
          courses: {
          courseDetails: {
              code: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
              description: joi.string().regex(/^[1-4a-zA-Z]{55}$/).required(),
              unit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
          }}
        })
    },
    Schedule: {
      create: joi.object<ISchedule>({
          program: joi.string().regex(/^[A-F]{10}$/).trim().required(),
          block: joi.string().regex(/^[1-4a-zA-Z]{2}$/).trim().required(),
          courses: {
          courseDetails: {
            classCode: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
            courseCode: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
            courseDescription: joi.string().regex(/^[1-4a-zA-Z]{55}$/).required(),
            courseUnit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
            day: joi.string().regex(/^[0-9]{10}$/).required(),
            time: joi.string().regex(/^[0-9a-z]{6}$/).required(),
            room: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
            instructor: joi.string().regex(/^[a-zA-Z]{55}$/).required(),
          }}
      }),
      update: joi.object<ISchedule>({
        program: joi.string().regex(/^[A-Z]{10}$/).trim().required(),
        block: joi.string().regex(/^[1-4a-zA-Z]{2}$/).trim().required(),
        courses: {
        courseDetails: {
          classCode: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
          courseCode: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
          courseDescription: joi.string().regex(/^[1-4a-zA-Z]{55}$/).required(),
          courseUnit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
          day: joi.string().regex(/^[0-9]{10}$/).required(),
          time: joi.string().regex(/^[0-9a-z]{6}$/).required(),
          room: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
          instructor: joi.string().regex(/^[a-zA-Z]{55}$/).required(),
        }}
      }),
    },
    Room: {
      create: joi.object<IRoom>({
          name: joi.string().regex(/^[1-9a-zA-Z]{20}$/).trim().required(),
          availability: {
            day: joi.string().regex(/^[a-zA-Z]{20}$/).required(),
            time: joi.string().regex(/^[0-9a-z]{20}$/).required()
          }
      }),
      update: joi.object<IRoom>({
        name: joi.string().regex(/^[1-9a-zA-Z]{20}$/).trim().required(),
        availability: {
          day: joi.string().regex(/^[a-zA-Z]{20}$/).required(),
          time: joi.string().regex(/^[0-9a-z]{20}$/).required()
        }
      })
    },
    Teacher: {
      create: joi.object<ITeacher>({
          name: joi.string().regex(/^[a-zA-Z]{20}$/).trim().required(),
          hours: joi.string().regex(/^[0-9a-z]{20}$/).trim().required(),
          days: joi.string().regex(/^[1-7]{1}$/).trim().required(),
          prefferdCourses: {
            code: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
            description: joi.string().regex(/^[a-zA-Z]{20}$/).required(),
            units: joi.string().regex(/^[1-9]{2}$/).required()
          }
      }),
      update: joi.object<ITeacher>({
        name: joi.string().regex(/^[a-zA-Z]{20}$/).trim().required(),
          hours: joi.string().regex(/^[0-9a-z]{20}$/).trim().required(),
          days: joi.string().regex(/^[1-7]{1}$/).trim().required(),
          prefferdCourses: {
            code: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
            description: joi.string().regex(/^[a-zA-Z]{20}$/).required(),
            units: joi.string().regex(/^[1-9]{2}$/).required()
        }
      })
    },
    Courses: {
      create: joi.object<ICourses>({
        code: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
        description: joi.string().regex(/^[a-zA-Z]{20}$/).required(),
        units: joi.string().regex(/^[1-9]{2}$/).required()
          
      }),
      update: joi.object<ICourses>({
        code: joi.string().regex(/^[1-9a-zA-Z]{20}$/).required(),
        description: joi.string().regex(/^[a-zA-Z]{20}$/).required(),
        units: joi.string().regex(/^[1-9]{2}$/).required()
      })
    },
    User: {
      create: joi.object<IUser>({
        username: joi.string().regex(/^[1-9a-zA-Z]{55}$/).required(),
        email: joi.string().regex(/^[1-9a-zA-Z]{55}$/).required(),
        password: joi.string().regex(/^[1-9a-zA-Z]{55}$/).required()
          
      }),
      update: joi.object<IUser>({
        username: joi.string().regex(/^[1-9a-zA-Z]{55}$/).required(),
        email: joi.string().regex(/^[1-9a-zA-Z]{55}$/).required(),
        password: joi.string().regex(/^[1-9a-zA-Z]{55}$/).required()
      })
    },
  };