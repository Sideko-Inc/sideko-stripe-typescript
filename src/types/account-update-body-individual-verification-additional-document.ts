import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyIndividualVerificationAdditionalDocument
 */
export type AccountUpdateBodyIndividualVerificationAdditionalDocument = {
  back?: string | undefined;
  front?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodyIndividualVerificationAdditionalDocument without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyIndividualVerificationAdditionalDocument =
  {
    back?: string | undefined;
    front?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyIndividualVerificationAdditionalDocument
 */
const SchemaIn$AccountUpdateBodyIndividualVerificationAdditionalDocument: z.ZodType<
  AccountUpdateBodyIndividualVerificationAdditionalDocument, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyIndividualVerificationAdditionalDocument
 */
const SchemaOut$AccountUpdateBodyIndividualVerificationAdditionalDocument: z.ZodType<
  External$AccountUpdateBodyIndividualVerificationAdditionalDocument, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyIndividualVerificationAdditionalDocument // the object to be transformed
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

export const Schemas$AccountUpdateBodyIndividualVerificationAdditionalDocument =
  {
    in: SchemaIn$AccountUpdateBodyIndividualVerificationAdditionalDocument,
    out: SchemaOut$AccountUpdateBodyIndividualVerificationAdditionalDocument,
  };
