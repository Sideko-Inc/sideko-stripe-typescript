import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyIndividualVerificationAdditionalDocument
 */
export type AccountCreateBodyIndividualVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodyIndividualVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyIndividualVerificationAdditionalDocument =
  {
    back?: string | undefined;
    front?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyIndividualVerificationAdditionalDocument
 */
const SchemaIn$AccountCreateBodyIndividualVerificationAdditionalDocument: z.ZodType<
  AccountCreateBodyIndividualVerificationAdditionalDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyIndividualVerificationAdditionalDocument
 */
const SchemaOut$AccountCreateBodyIndividualVerificationAdditionalDocument: z.ZodType<
  External$AccountCreateBodyIndividualVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyIndividualVerificationAdditionalDocument // the object to be transformed
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

export const Schemas$AccountCreateBodyIndividualVerificationAdditionalDocument =
  {
    in: SchemaIn$AccountCreateBodyIndividualVerificationAdditionalDocument,
    out: SchemaOut$AccountCreateBodyIndividualVerificationAdditionalDocument,
  };
