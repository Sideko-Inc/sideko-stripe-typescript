import {
  AccountAnnualRevenue,
  External$AccountAnnualRevenue,
  Schemas$AccountAnnualRevenue,
} from "./account-annual-revenue";
import {
  AccountMonthlyEstimatedRevenue,
  External$AccountMonthlyEstimatedRevenue,
  Schemas$AccountMonthlyEstimatedRevenue,
} from "./account-monthly-estimated-revenue";
import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountBusinessProfile = {
  annualRevenue?: AccountAnnualRevenue | undefined;
  /**
   * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
   */
  estimatedWorkerCount?: number | null | undefined;
  /**
   * [The merchant category code for the account](/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
   */
  mcc?: string | null | undefined;
  monthlyEstimatedRevenue?: AccountMonthlyEstimatedRevenue | undefined;
  /**
   * The customer-facing business name.
   */
  name?: string | null | undefined;
  /**
   * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
   */
  productDescription?: string | null | undefined;
  supportAddress?: Address | undefined;
  /**
   * A publicly available email address for sending support issues to.
   */
  supportEmail?: string | null | undefined;
  /**
   * A publicly available phone number to call with support issues.
   */
  supportPhone?: string | null | undefined;
  /**
   * A publicly available website for handling support issues.
   */
  supportUrl?: string | null | undefined;
  /**
   * The business's publicly available website.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * AccountBusinessProfile without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBusinessProfile = {
  annual_revenue?: External$AccountAnnualRevenue | undefined;
  estimated_worker_count?: number | null | undefined;
  mcc?: string | null | undefined;
  monthly_estimated_revenue?:
    | External$AccountMonthlyEstimatedRevenue
    | undefined;
  name?: string | null | undefined;
  product_description?: string | null | undefined;
  support_address?: External$Address | undefined;
  support_email?: string | null | undefined;
  support_phone?: string | null | undefined;
  support_url?: string | null | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBusinessProfile
 */
const SchemaIn$AccountBusinessProfile: z.ZodType<
  AccountBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    annual_revenue: Schemas$AccountAnnualRevenue.in.optional(),
    estimated_worker_count: z.number().int().nullable().optional(),
    mcc: z.string().nullable().optional(),
    monthly_estimated_revenue:
      Schemas$AccountMonthlyEstimatedRevenue.in.optional(),
    name: z.string().nullable().optional(),
    product_description: z.string().nullable().optional(),
    support_address: Schemas$Address.in.optional(),
    support_email: z.string().nullable().optional(),
    support_phone: z.string().nullable().optional(),
    support_url: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBusinessProfile
 */
const SchemaOut$AccountBusinessProfile: z.ZodType<
  External$AccountBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  AccountBusinessProfile // the object to be transformed
> = z
  .object({
    annualRevenue: Schemas$AccountAnnualRevenue.out.optional(),
    estimatedWorkerCount: z.number().int().nullable().optional(),
    mcc: z.string().nullable().optional(),
    monthlyEstimatedRevenue:
      Schemas$AccountMonthlyEstimatedRevenue.out.optional(),
    name: z.string().nullable().optional(),
    productDescription: z.string().nullable().optional(),
    supportAddress: Schemas$Address.out.optional(),
    supportEmail: z.string().nullable().optional(),
    supportPhone: z.string().nullable().optional(),
    supportUrl: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
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

export const Schemas$AccountBusinessProfile = {
  in: SchemaIn$AccountBusinessProfile,
  out: SchemaOut$AccountBusinessProfile,
};
