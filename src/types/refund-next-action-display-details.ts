import { EmailSent, External$EmailSent, Schemas$EmailSent } from "./email-sent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RefundNextActionDisplayDetails = {
  emailSent: EmailSent;
  /**
   * The expiry timestamp.
   */
  expiresAt: number;
};

/**
 * @internal
 * RefundNextActionDisplayDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundNextActionDisplayDetails = {
  email_sent: External$EmailSent;
  expires_at: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundNextActionDisplayDetails
 */
const SchemaIn$RefundNextActionDisplayDetails: z.ZodType<
  RefundNextActionDisplayDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email_sent: Schemas$EmailSent.in,
    expires_at: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email_sent: "emailSent",
      expires_at: "expiresAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundNextActionDisplayDetails
 */
const SchemaOut$RefundNextActionDisplayDetails: z.ZodType<
  External$RefundNextActionDisplayDetails, // output type of this zod object
  z.ZodTypeDef,
  RefundNextActionDisplayDetails // the object to be transformed
> = z
  .object({
    emailSent: Schemas$EmailSent.out,
    expiresAt: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      emailSent: "email_sent",
      expiresAt: "expires_at",
    });
  });

export const Schemas$RefundNextActionDisplayDetails = {
  in: SchemaIn$RefundNextActionDisplayDetails,
  out: SchemaOut$RefundNextActionDisplayDetails,
};
