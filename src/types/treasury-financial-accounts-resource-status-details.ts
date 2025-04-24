import {
  External$TreasuryFinancialAccountsResourceClosedStatusDetails,
  Schemas$TreasuryFinancialAccountsResourceClosedStatusDetails,
  TreasuryFinancialAccountsResourceClosedStatusDetails,
} from "./treasury-financial-accounts-resource-closed-status-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryFinancialAccountsResourceStatusDetails = {
  closed?: TreasuryFinancialAccountsResourceClosedStatusDetails | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceStatusDetails = {
  closed?:
    | External$TreasuryFinancialAccountsResourceClosedStatusDetails
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceStatusDetails
 */
const SchemaIn$TreasuryFinancialAccountsResourceStatusDetails: z.ZodType<
  TreasuryFinancialAccountsResourceStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    closed:
      Schemas$TreasuryFinancialAccountsResourceClosedStatusDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      closed: "closed",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceStatusDetails
 */
const SchemaOut$TreasuryFinancialAccountsResourceStatusDetails: z.ZodType<
  External$TreasuryFinancialAccountsResourceStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceStatusDetails // the object to be transformed
> = z
  .object({
    closed:
      Schemas$TreasuryFinancialAccountsResourceClosedStatusDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      closed: "closed",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceStatusDetails = {
  in: SchemaIn$TreasuryFinancialAccountsResourceStatusDetails,
  out: SchemaOut$TreasuryFinancialAccountsResourceStatusDetails,
};
