import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership
 */
export type AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership
 */
const SchemaIn$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership: z.ZodType<
  AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership
 */
const SchemaOut$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership: z.ZodType<
  External$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership =
  {
    in: SchemaIn$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership,
    out: SchemaOut$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership,
  };
