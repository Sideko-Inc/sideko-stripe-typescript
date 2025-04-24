import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership
 */
export type AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership
 */
const SchemaIn$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership: z.ZodType<
  AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership
 */
const SchemaOut$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership: z.ZodType<
  External$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership =
  {
    in: SchemaIn$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership,
    out: SchemaOut$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership,
  };
