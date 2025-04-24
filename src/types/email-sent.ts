import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type EmailSent = {
  /**
   * The timestamp when the email was sent.
   */
  emailSentAt: number;
  /**
   * The recipient's email address.
   */
  emailSentTo: string;
};

/**
 * @internal
 * EmailSent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EmailSent = {
  email_sent_at: number;
  email_sent_to: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EmailSent
 */
const SchemaIn$EmailSent: z.ZodType<
  EmailSent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email_sent_at: z.number().int(),
    email_sent_to: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email_sent_at: "emailSentAt",
      email_sent_to: "emailSentTo",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EmailSent
 */
const SchemaOut$EmailSent: z.ZodType<
  External$EmailSent, // output type of this zod object
  z.ZodTypeDef,
  EmailSent // the object to be transformed
> = z
  .object({
    emailSentAt: z.number().int(),
    emailSentTo: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      emailSentAt: "email_sent_at",
      emailSentTo: "email_sent_to",
    });
  });

export const Schemas$EmailSent = {
  in: SchemaIn$EmailSent,
  out: SchemaOut$EmailSent,
};
