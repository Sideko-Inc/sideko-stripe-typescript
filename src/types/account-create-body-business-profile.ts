import {
  AccountCreateBodyBusinessProfileAnnualRevenue,
  External$AccountCreateBodyBusinessProfileAnnualRevenue,
  Schemas$AccountCreateBodyBusinessProfileAnnualRevenue,
} from "./account-create-body-business-profile-annual-revenue";
import {
  AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue,
  External$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue,
  Schemas$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue,
} from "./account-create-body-business-profile-monthly-estimated-revenue";
import {
  AccountCreateBodyBusinessProfileSupportAddress,
  External$AccountCreateBodyBusinessProfileSupportAddress,
  Schemas$AccountCreateBodyBusinessProfileSupportAddress,
} from "./account-create-body-business-profile-support-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Business information about the account.
 */
export type AccountCreateBodyBusinessProfile = {
  annualRevenue?: AccountCreateBodyBusinessProfileAnnualRevenue | undefined;
  estimatedWorkerCount?: number | undefined;
  mcc?: string | undefined;
  monthlyEstimatedRevenue?:
    | AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue
    | undefined;
  name?: string | undefined;
  productDescription?: string | undefined;
  supportAddress?: AccountCreateBodyBusinessProfileSupportAddress | undefined;
  supportEmail?: string | undefined;
  supportPhone?: string | undefined;
  supportUrl?: (string | string) | undefined;
  url?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodyBusinessProfile without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyBusinessProfile = {
  annual_revenue?:
    | External$AccountCreateBodyBusinessProfileAnnualRevenue
    | undefined;
  estimated_worker_count?: number | undefined;
  mcc?: string | undefined;
  monthly_estimated_revenue?:
    | External$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue
    | undefined;
  name?: string | undefined;
  product_description?: string | undefined;
  support_address?:
    | External$AccountCreateBodyBusinessProfileSupportAddress
    | undefined;
  support_email?: string | undefined;
  support_phone?: string | undefined;
  support_url?: (string | string) | undefined;
  url?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyBusinessProfile
 */
const SchemaIn$AccountCreateBodyBusinessProfile: z.ZodType<
  AccountCreateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    annual_revenue:
      Schemas$AccountCreateBodyBusinessProfileAnnualRevenue.in.optional(),
    estimated_worker_count: z.number().int().optional(),
    mcc: z.string().optional(),
    monthly_estimated_revenue:
      Schemas$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue.in.optional(),
    name: z.string().optional(),
    product_description: z.string().optional(),
    support_address:
      Schemas$AccountCreateBodyBusinessProfileSupportAddress.in.optional(),
    support_email: z.string().optional(),
    support_phone: z.string().optional(),
    support_url: z.union([z.string(), z.string()]).optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      annual_revenue: "annualRevenue",
      estimated_worker_count: "estimatedWorkerCount",
      mcc: "mcc",
      monthly_estimated_revenue: "monthlyEstimatedRevenue",
      name: "name",
      product_description: "productDescription",
      support_address: "supportAddress",
      support_email: "supportEmail",
      support_phone: "supportPhone",
      support_url: "supportUrl",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyBusinessProfile
 */
const SchemaOut$AccountCreateBodyBusinessProfile: z.ZodType<
  External$AccountCreateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyBusinessProfile // the object to be transformed
> = z
  .object({
    annualRevenue:
      Schemas$AccountCreateBodyBusinessProfileAnnualRevenue.out.optional(),
    estimatedWorkerCount: z.number().int().optional(),
    mcc: z.string().optional(),
    monthlyEstimatedRevenue:
      Schemas$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue.out.optional(),
    name: z.string().optional(),
    productDescription: z.string().optional(),
    supportAddress:
      Schemas$AccountCreateBodyBusinessProfileSupportAddress.out.optional(),
    supportEmail: z.string().optional(),
    supportPhone: z.string().optional(),
    supportUrl: z.union([z.string(), z.string()]).optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      annualRevenue: "annual_revenue",
      estimatedWorkerCount: "estimated_worker_count",
      mcc: "mcc",
      monthlyEstimatedRevenue: "monthly_estimated_revenue",
      name: "name",
      productDescription: "product_description",
      supportAddress: "support_address",
      supportEmail: "support_email",
      supportPhone: "support_phone",
      supportUrl: "support_url",
      url: "url",
    });
  });

export const Schemas$AccountCreateBodyBusinessProfile = {
  in: SchemaIn$AccountCreateBodyBusinessProfile,
  out: SchemaOut$AccountCreateBodyBusinessProfile,
};
