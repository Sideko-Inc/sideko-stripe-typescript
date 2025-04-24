import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer
 */
export type CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer = {
  country: string;
};

/**
 * @internal
 * CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer =
  {
    country: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer
 */
const SchemaIn$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer: z.ZodType<
  CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer
 */
const SchemaOut$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer: z.ZodType<
  External$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer // the object to be transformed
> = z
  .object({
    country: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer =
  {
    in: SchemaIn$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer,
    out: SchemaOut$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer,
  };
