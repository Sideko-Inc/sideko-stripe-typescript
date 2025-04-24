import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryFinancialAccountsFeatureCreateBody,
  Schemas$TreasuryFinancialAccountsFeatureCreateBody,
  TreasuryFinancialAccountsFeatureCreateBody,
} from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  financialAccount: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  financial_account: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_account: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    financialAccount: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      expand: "expand",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: TreasuryFinancialAccountsFeatureCreateBody | undefined;
  financialAccount: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$TreasuryFinancialAccountsFeatureCreateBody | undefined;
  financial_account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TreasuryFinancialAccountsFeatureCreateBody.in.optional(),
    financial_account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financial_account: "financialAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TreasuryFinancialAccountsFeatureCreateBody.out.optional(),
    financialAccount: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      financialAccount: "financial_account",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
