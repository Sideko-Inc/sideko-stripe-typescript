import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyIndividualVerificationDocument
 */
export type AccountCreateBodyIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodyIndividualVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyIndividualVerificationDocument
 */
const SchemaIn$AccountCreateBodyIndividualVerificationDocument: z.ZodType<
  AccountCreateBodyIndividualVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    back: z.string().optional(),
    front: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyIndividualVerificationDocument
 */
const SchemaOut$AccountCreateBodyIndividualVerificationDocument: z.ZodType<
  External$AccountCreateBodyIndividualVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyIndividualVerificationDocument // the object to be transformed
> = z
  .object({
    back: z.string().optional(),
    front: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      back: "back",
      front: "front",
    });
  });

export const Schemas$AccountCreateBodyIndividualVerificationDocument = {
  in: SchemaIn$AccountCreateBodyIndividualVerificationDocument,
  out: SchemaOut$AccountCreateBodyIndividualVerificationDocument,
};
