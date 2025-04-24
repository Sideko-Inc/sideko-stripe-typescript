import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyIndividualVerificationDocument
 */
export type AccountUpdateBodyIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodyIndividualVerificationDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyIndividualVerificationDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyIndividualVerificationDocument
 */
const SchemaIn$AccountUpdateBodyIndividualVerificationDocument: z.ZodType<
  AccountUpdateBodyIndividualVerificationDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyIndividualVerificationDocument
 */
const SchemaOut$AccountUpdateBodyIndividualVerificationDocument: z.ZodType<
  External$AccountUpdateBodyIndividualVerificationDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyIndividualVerificationDocument // the object to be transformed
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

export const Schemas$AccountUpdateBodyIndividualVerificationDocument = {
  in: SchemaIn$AccountUpdateBodyIndividualVerificationDocument,
  out: SchemaOut$AccountUpdateBodyIndividualVerificationDocument,
};
